import { createThemeBuilder } from '@tamagui/theme-builder';

const themesBuilder = createThemeBuilder()
  .addPalettes({

    dark: ['#000', '#FFFFFF', '#F6AA1C', '#E0E0E0', '#232528', '#959595', '#FF5252', '#DDDDDD', 'rgba(0, 0, 0, 0.2)'],
    light: ['#F2F4F3', '#FFFFFF', '#F6AA1C', '#E0E0E0', '#232528', '#959595', '#FF5252', '#DDDDDD', 'rgba(0, 0, 0, 0.2)'],
  })
  .addTemplates({
    base: {
      background: 0,
      surface: 1,
      interactive: 2,
      disabled: 3,
      primaryText: 4,
      secondaryText: 5,
      highlight: 6,
      border: 7
    },
    subtle: {
      background: 0,
      surface: 1,
      interactive: 2,
      disabled: 3,
      primaryText: 4,
      secondaryText: 5,
      highlight: 6,
      border: 7
    },
  })
  .addThemes({
    light: {
      template: 'base',
      palette: 'light',
    },
    dark: {
      template: 'base',
      palette: 'dark',
    },
  })
  .addChildThemes({
    subtle: {
      template: 'subtle',
    },
  });

export const themes = themesBuilder.build();