/* eslint-disable react-native/no-color-literals */
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { DropdownType } from './Dropdown.dt';
import theme from 'shared/theme';
import InputWrapper from 'components/InputWrapper';

const DropdownComponent = ({
  onChange,
  label,
  data,
  placeholder,
  style,
  hintMessage,
  errorMessage,
  disable,
  isLoading,
  value: defaultValue,
  ...props
}: DropdownType) => {
  const styles = StyleSheet.create({
    // eslint-disable-next-line react-native/no-color-literals
    container: {
      // backgroundColor: 'white',
      width: '100%',
    },
    // eslint-disable-next-line react-native/no-color-literals
    dropdown: {
      minWidth: 100,
      width: '100%',
      borderRadius: 8,
      paddingHorizontal: 5,
    },
    placeholderStyle: {
      fontSize: 14,
      // color: 'white',
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });

  const [value, setValue] = useState<string | number | undefined>(undefined);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    setValue(defaultValue as any)
  }, [defaultValue])



  return (
    <InputWrapper
      errorMessage={errorMessage}
      hintMessage={hintMessage}
      isLoading={isLoading}
      label={label}

    >
      <Dropdown
        disable={disable}

        // eslint-disable-next-line react-native/no-inline-styles, react-native/no-color-literals
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }, style]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search={props.search}
        renderRightIcon={isLoading ? () => <ActivityIndicator size="small" /> : undefined}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : '...'}
        searchPlaceholder="Search..."
        value={value as never}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          if (typeof onChange === 'function') {
            onChange(item as any);
          }
          setValue(item.value);
          setIsFocus(false);
        }}
      // renderLeftIcon={() => <SVGs.AngleDown color={isFocus ? 'blue' : 'black'} />}
      />

    </InputWrapper>
  );
};

export default DropdownComponent;
