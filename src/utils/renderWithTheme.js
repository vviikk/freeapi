import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '~config/theme';

export default (Component, options) => render(
    <ThemeProvider theme={theme}>
        {Component}
    </ThemeProvider>,
    options,
);
