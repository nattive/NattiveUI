import OTPInputView from '@twotalltotems/react-native-otp-input';
import React, { useEffect, useRef, useState } from 'react';
import { AppState, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
// import { t } from 'i18next';
import BackgroundTimer from 'react-native-background-timer';

import Box from 'components/Box';
import Text from 'components/Text';
import Button from 'components/button';
import { RFValue } from 'helpers';
import { countdown } from 'helpers/functions';
import theme from 'shared/theme';
import { OTPInput as Prop } from './otp-input.interface';

const OTPInput = (props: Prop) => {
  const [code, setCode] = useState('');
  const { disableCountDown, onOTPChange, pinCount, retryOTP, onButtonPressed, loading } = props;

  const [remainingTime, setRemainingTime] = useState(60);
  const [countdownStartTime, setCountdownStartTime] = useState(0);
  const intervalRef = useRef<number | undefined>();


  const updateCountDown = () => {
    const updateCallback = (remainingSeconds: number) => {
      setRemainingTime(remainingSeconds);
    };

    countdown(remainingTime, updateCallback);
  };

  const handleAppStateChange = (nextAppState: string) => {
    if (nextAppState === 'active' && countdownStartTime > 0 && !disableCountDown) {
      const elapsedTime = Math.floor((Date.now() - countdownStartTime) / 1000);
      const remainingSeconds = Math.max(60 - elapsedTime, 0);
      setRemainingTime(remainingSeconds);
      if (remainingSeconds > 0) {
        updateCountDown();
      } else {
        BackgroundTimer.clearInterval(intervalRef.current as number); // Use BackgroundTimer to clear the interval
      }
    } else if (nextAppState === 'inactive' || nextAppState === 'background') {
      BackgroundTimer.clearInterval(intervalRef.current as number); // Use BackgroundTimer to clear the interval
    }
  };

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    return () => {
      // AppState.removeEventListener("change", handleAppStateChange);
    };
  }, []);

  useEffect(() => {
    if (countdownStartTime > 0 && !disableCountDown) {
      const elapsedTime = Math.floor((Date.now() - countdownStartTime) / 1000);
      const remainingSeconds = Math.max(60 - elapsedTime, 0);
      setRemainingTime(remainingSeconds);
      if (remainingSeconds > 0) {
        updateCountDown();
      }
    }
  }, [countdownStartTime]);

  const handleOTPChange = (otp: string) => {
    setCode(otp);
    onOTPChange(otp);
  };

  const startCountdown = () => {
    setCountdownStartTime(Date.now() - (60 - remainingTime) * 1000);
  };

  useEffect(() => {
    if (disableCountDown) {
      setRemainingTime(0);
    } else if (countdownStartTime === 0) {
      startCountdown();
    }
  }, [disableCountDown]);

  return (
    <Box height={Dimensions.get('screen').height / 3}>
      <Box height="50%" alignSelf="center">
        <OTPInputView
          pinCount={pinCount}
          code={code}
          onCodeChanged={handleOTPChange}
          autoFocusOnLoad
          codeInputFieldStyle={styles.codeInputFieldStyle}
          codeInputHighlightStyle={styles.codeInputHighlightStyle}
        />
      </Box>

      <Box marginTop="l">
        <Button
          backgroundColor="primary500"
          text={'Done'}
          variant="solid"
          onPress={onButtonPressed}
          loading={loading}
          disabled={loading}
        />
      </Box>

      {!disableCountDown && (
        <Box alignItems="center" marginTop="m">
          <Box flexDirection="row" justifyContent="center"  >


            <TouchableOpacity
              disabled={remainingTime > 1}
              onPress={() => {
                if (typeof retryOTP === 'function') {
                  retryOTP();
                  setCountdownStartTime(Date.now());
                  updateCountDown();
                  setRemainingTime(60);
                }
              }}
            >
              <Text color={'text'} variant="body">
                {remainingTime > 1
                  ? ` ${remainingTime} seconds left`
                  : <Text color={'text'} variant="body">
                    Didn't receive a code?  <Text color={'primary500'} variant="body"> Resend
                    </Text>
                  </Text>
                }
              </Text>
            </TouchableOpacity>
          </Box>
        </Box>
      )}
    </Box>
  );
};


const styles = StyleSheet.create({
  codeInputFieldStyle: {
    borderColor: theme.colors.grey200,
    color: theme.colors.grey500,
    borderRadius: RFValue(8),
    borderWidth: RFValue(1),
  },
  codeInputHighlightStyle: {
    borderColor: theme.colors.grey200,
  },
});


export default OTPInput;
