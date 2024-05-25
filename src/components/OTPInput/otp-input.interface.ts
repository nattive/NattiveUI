export interface OTPInput {
    /**
     * How many boxes you want for pin
     */
    pinCount: number;

    /**
     * Callback function triggered when the text in the input changes.
     */
    onOTPChange: (otp: string) => void;

    /**
     * Callback function triggered to resend the OTP.
     */
    retryOTP?: () => void;

    /**
     * Hide and show OTP countdown
     */
    disableCountDown: boolean;

    /**
     * Function attached to OTP button
     */
    onButtonPressed: () => void;

    /**
     * Is API call loading
     */
    loading: boolean;
}
