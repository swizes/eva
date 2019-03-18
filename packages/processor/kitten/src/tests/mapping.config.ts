import { ThemeMappingType } from '@eva/types';

export const mapping: ThemeMappingType = {
  Button: {
    meta: {
      scope: 'all',
      parameters: {
        highlightColor: {
          type: 'color',
        },
        innerSize: {
          type: 'number',
        },
        selectColor: {
          type: 'color',
        },
        borderColor: {
          type: 'color',
        },
        highlightSize: {
          type: 'number',
        },
        borderWidth: {
          type: 'color',
        },
        size: {
          type: 'number',
        },
      },
      appearances: {
        filled: {
          default: true,
        },
        outline: {
          default: false,
        },
      },
      variantGroups: {
        status: {
          primary: {
            default: true,
          },
          success: {
            default: false,
          },
          info: {
            default: false,
          },
          warning: {
            default: false,
          },
          danger: {
            default: false,
          },
        },
        size: {
          tiny: {
            default: false,
          },
          small: {
            default: false,
          },
          medium: {
            default: true,
          },
          large: {
            default: false,
          },
          giant: {
            default: true,
          },
        },
      },
      states: {
        disabled: {
          default: false,
          priority: 0,
          scope: 'all',
        },
        active: {
          default: false,
          priority: 1,
          scope: 'all',
        },
      },
    },
    appearances: {
      filled: {
        mapping: {
          borderRadius: 6,
          text: {
            color: 'text-primary-inverse',
            fontWeight: 800,
          },
          icon: {
            tintColor: '#ffffff',
            marginHorizontal: 4,
          },
        },
        variantGroups: {
          status: {
            primary: {
              backgroundColor: '#2196F3',
              state: {
                active: {
                  backgroundColor: '#1E88E5',
                },
              },
            },
            success: {
              backgroundColor: '#4CAF50',
              state: {
                active: {
                  backgroundColor: '#43A047',
                },
              },
            },
            info: {
              backgroundColor: '#03A9F4',
              state: {
                active: {
                  backgroundColor: '#039BE5',
                },
              },
            },
            warning: {
              backgroundColor: '#FFC107',
              state: {
                active: {
                  backgroundColor: '#FFB300',
                },
              },
            },
            danger: {
              backgroundColor: '#F44336',
              state: {
                active: {
                  backgroundColor: '#E53935',
                },
              },
            },
          },
          size: {
            tiny: {
              minHeight: 16,
              minWidth: 16,
              padding: 3,
              text: {
                fontSize: 10,
                marginHorizontal: 3,
              },
              icon: {
                width: 11,
                height: 11,
                marginHorizontal: 3,
              },
            },
            small: {
              minHeight: 20,
              minWidth: 20,
              padding: 3.5,
              text: {
                fontSize: 11,
                marginHorizontal: 3.5,
              },
              icon: {
                width: 12,
                height: 12,
                marginHorizontal: 3.5,
              },
            },
            medium: {
              minHeight: 24,
              minWidth: 24,
              padding: 4,
              text: {
                fontSize: 12,
                marginHorizontal: 4,
              },
              icon: {
                width: 13,
                height: 13,
                marginHorizontal: 4,
              },
            },
            large: {
              minHeight: 30,
              minWidth: 30,
              padding: 4.5,
              text: {
                fontSize: 13,
                marginHorizontal: 4.5,
              },
              icon: {
                width: 14,
                height: 14,
                marginHorizontal: 4.5,
              },
            },
            giant: {
              minHeight: 36,
              minWidth: 36,
              padding: 5,
              text: {
                fontSize: 14,
                marginHorizontal: 5,
              },
              icon: {
                width: 15,
                height: 15,
                marginHorizontal: 5,
              },
            },
          },
        },
      },
      outline: {
        mapping: {
          borderWidth: 2,
        },
        variantGroups: {
          status: {
            primary: {
              backgroundColor: 'transparent',
              borderColor: '#2196F3',
              text: {
                color: '#2196F3',
              },
              icon: {
                tintColor: '#2196F3',
              },
              state: {
                active: {
                  backgroundColor: 'transparent',
                  borderColor: '#1E88E5',
                  text: {
                    color: '#1E88E5',
                  },
                  icon: {
                    tintColor: '#1E88E5',
                  },
                },
              },
            },
            success: {
              backgroundColor: 'transparent',
              borderColor: '#4CAF50',
              text: {
                color: '#4CAF50',
              },
              icon: {
                tintColor: '#4CAF50',
              },
              state: {
                active: {
                  backgroundColor: 'transparent',
                  borderColor: '#43A047',
                  text: {
                    color: '#43A047',
                  },
                  icon: {
                    tintColor: '#43A047',
                  },
                },
              },
            },
            info: {
              backgroundColor: 'transparent',
              borderColor: '#03A9F4',
              text: {
                color: '#03A9F4',
              },
              icon: {
                tintColor: '#03A9F4',
              },
              state: {
                active: {
                  backgroundColor: 'transparent',
                  borderColor: '#039BE5',
                  text: {
                    color: '#039BE5',
                  },
                  icon: {
                    tintColor: '#039BE5',
                  },
                },
              },
            },
            warning: {
              backgroundColor: 'transparent',
              borderColor: '#FFC107',
              text: {
                color: '#FFC107',
              },
              icon: {
                tintColor: '#FFC107',
              },
              state: {
                active: {
                  backgroundColor: 'transparent',
                  borderColor: '#FFB300',
                  text: {
                    color: '#FFB300',
                  },
                  icon: {
                    tintColor: '#FFB300',
                  },
                },
              },
            },
            danger: {
              backgroundColor: 'transparent',
              borderColor: '#F44336',
              text: {
                color: '#F44336',
              },
              icon: {
                tintColor: '#F44336',
              },
              state: {
                active: {
                  backgroundColor: 'transparent',
                  borderColor: '#E53935',
                  text: {
                    color: '#E53935',
                  },
                  icon: {
                    tintColor: '#E53935',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
