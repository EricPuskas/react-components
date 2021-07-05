import React from "react";

/**
 * Imports types
 */
import { TestComponentProps } from "./TestComponent.types";

/**
 * Imports the component styles
 */
import { useStyles } from "./TestComponent.styles";

export const TestComponent: React.FC<TestComponentProps> = (props) => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <div className={classes.TestComponent}>
      <h1>I'm the test component</h1>
    </div>
  );
};
