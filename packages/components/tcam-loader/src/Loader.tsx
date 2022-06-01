import React from "react";

import * as styles from "./styles";

interface LoaderProps {
  loading: boolean;
  className: string;
}

export const Loader: React.FunctionComponent<LoaderProps> = ({
  loading,
  className,
}) =>
  loading ? (
    <div className={className}>
      <div className={styles.loader}></div>
    </div>
  ) : null;
