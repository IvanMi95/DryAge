interface Theme {
  '--primary': Color;
  '--secondary': Color;
  '--background': Color;
}

enum Color {
  VIOLET = '#9E25FC',
  DARK_VIOLET = '#250341',
  LIGHT_GRAY = '#F4F4F4',
  WHITE = '#FFF',
}
type ThemeType = 'dark' | 'light';