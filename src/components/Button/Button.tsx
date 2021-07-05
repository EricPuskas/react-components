import React, { forwardRef, Fragment } from "react";

/**
 * External Imports
 */
import clsx from "clsx";

/**
 * Imports Material UI components
 */
import { Button as ButtonMui } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

/**
 * Imports types
 */
import { ButtonProps } from "./Button.types";

/**
 * Imports the component styles
 */
import { useStyles } from "./Button.styles";

/**
 * Defines the default props
 */
const defaultProps: ButtonProps = {
  type: "button",
  fullWidth: false,
  className: "",
  variant: "default",
  label: "",
  onClick: () => {},
  loading: false
};

/**
 * Displays the component
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      type,
      fullWidth,
      variant,
      className,
      children,
      label,
      onClick,
      loading,
      prefix,
      suffix
    } = props;
    /**
     * Gets the component styles
     */
    const classes = useStyles();

    /**
     * Defines the button classes
     */
    const buttonClasses = clsx(classes.Button, classes[variant], {
      [className!]: className,
      [classes.loading]: loading
    });

    /**
     * Defines the progress classes
     */
    const progressClasses = clsx(classes.progress, {
      [classes.progressDark]: variant === "default"
    });

    /**
     * Handles rendering the button content
     */
    const renderButtonContent = () => {
      if (loading)
        return <CircularProgress size={22} className={progressClasses} />;

      if (prefix || suffix) {
        return (
          <Fragment>
            {prefix}
            {label ? label : children}
            {suffix}
          </Fragment>
        );
      }

      return label ? label : children;
    };

    return (
      <ButtonMui
        ref={ref}
        className={buttonClasses}
        type={type}
        variant="contained"
        fullWidth={fullWidth}
        onClick={onClick}
      >
        {renderButtonContent()}
      </ButtonMui>
    );
  }
);

Button.defaultProps = defaultProps;
