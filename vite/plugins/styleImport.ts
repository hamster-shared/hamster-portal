/**
 *  Introduces component library styles on demand.
 * https://github.com/anncwb/vite-plugin-style-import
 */
import { createStyleImportPlugin } from 'vite-plugin-style-import';

export function configStyleImportPlugin() {
  const styleImportPlugin = createStyleImportPlugin({
    libs: [
      {
        libraryName: 'ant-design-vue',
        esModule: true,
        resolveStyle: (name) => {
          const ignoreList = [
            'anchor-link',
            'menu',
            'sub-menu',
            'menu-item',
            'menu-divider',
            'menu-item-group',
            'collapse',
            'collapse-panel',
            'breadcrumb-item',
            'breadcrumb-separator',
            'form-item',
            'popover',
            'step',
            'select-option',
            'select-opt-group',
            'card-grid',
            'card-meta',
            'descriptions-item',
            'list-item',
            'list-item-meta',
            'table-column',
            'table-column-group',
            'tab-pane',
            'tab-content',
            'timeline-item',
            'tree-node',
            'skeleton-input',
            'skeleton-avatar',
            'skeleton-title',
            'skeleton-paragraph',
            'skeleton-image',
            'skeleton-button',
          ];

          const replaceList = {
            'typography-text': 'typography',
            'typography-title': 'typography',
            'typography-paragraph': 'typography',
            'typography-link': 'typography',
            'dropdown-button': 'dropdown',
            'input-password': 'input',
            'input-search': 'input',
            'input-group': 'input',
            textarea: 'input',
            'radio-group': 'radio',
            'checkbox-group': 'checkbox',
            'layout-sider': 'layout',
            'layout-content': 'layout',
            'layout-footer': 'layout',
            'layout-header': 'layout',
            'month-picker': 'date-picker',
            'range-picker': 'date-picker',
          };

          return ignoreList.includes(name)
            ? ''
            : replaceList.hasOwnProperty(name)
              ? `ant-design-vue/es/${replaceList[name]}/style/index.css`
              : `ant-design-vue/es/${name}/style/index.css`;
        },
      },
    ],
  });
  return styleImportPlugin;
}
