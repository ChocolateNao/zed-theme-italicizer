export interface ZedTheme {
  name: string;
  author: string;
  themes: Theme[];
}

export interface Theme {
    appearance: string;
    name:       string;
    style:      ThemeStyle;
}

export interface ThemeStyle {
  players: PlayerStyle;
  syntax: SyntaxStyle;
  [key: string]: unknown;
}

export interface PlayerStyle {
  [key: string]: {
    cursor?: string;
    background?: string;
    selection?: string;
  };
}

export interface SyntaxStyle {
  [key: string]: {
    background_color?: string;
    color?: string;
    font_style?: string;
    font_weight?: string;
  };
}

export interface ItalicizeConfig {
  /** Whether to preserve existing font styles */
  preserveExisting?: boolean;
  /** Specific token types to italicize (if not provided, all applicable tokens will be italicized) */
  includeTokens?: string[];
  /** Token types to exclude from italicization */
  excludeTokens?: string[];
}

export interface PublishConfig {
  /** Output directory for the theme file */
  outputDir?: string;
  /** Whether to create a backup of the original theme */
  createBackup?: boolean;
}