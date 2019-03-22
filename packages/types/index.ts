export interface SchemeType {
  version: number;
  strict: StrictTheme;
  components: ThemeMappingType;
}

export interface StrictTheme {
  [key: string]: string;
}

export interface ThemeMappingType {
  [key: string]: ControlMappingType;
}

export interface ControlMappingType {
  meta: ControlMetaType;
  appearances: {
    [key: string]: AppearanceMappingType;
  };
}

export interface ControlMetaType {
  scope: ScopeMetaType;
  parameters: {
    [key: string]: PropertyMetaType;
  };
  appearances: {
    [key: string]: AppearanceMetaType;
  };
  variantGroups: {
    [key: string]: {
      [key: string]: VariantMetaType;
    };
  };
  states: {
    [key: string]: StateMetaType;
  };
}

export type ScopeMetaType = 'mobile' | 'web' | 'all';

export interface PropertyMetaType {
  type: 'number' | 'string';
}

export interface AppearanceMetaType {
  default: boolean;
}

export interface VariantMetaType {
  default: boolean;
}

export interface StateMetaType {
  default: boolean;
  priority: number;
  scope: ScopeMetaType;
}

export interface AppearanceMappingType {
  mapping: StateMappingType;
  variantGroups?: {
    [key: string]: {
      [key: string]: StateMappingType;
    };
  };
}

export interface MappingType {
  [key: string]: ParameterType | MappingType;
}

export interface StateMappingType extends MappingType {
  state?: {
    [key: string]: MappingType;
  };
}

export type ParameterType = string | number;

export interface ThemeStyleType {
  [key: string]: ControlThemedStyleType;
}

export interface ControlThemedStyleType {
  meta: ControlMetaType;
  styles: {
    [key: string]: ThemedStyleType;
  };
}

export interface ThemedStyleType {
  [key: string]: number | string | ThemedStyleType;
}
