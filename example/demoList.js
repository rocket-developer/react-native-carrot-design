// 一级页面  demo列表
export const MAINSCREENS = [
    {
        name: 'ButtonView',
        title: 'ButtonView',
        description: '按钮',
        module: require('./src/screens/ButtonView'),
    },
    {
        name: 'TextInputView',
        title: 'TextInputView',
        description: '输入框',
        module: require('./src/screens/TextInputView'),
    },
    {
        name: 'CollectionViewDemo',
        title: 'CollectionViewDemo',
        description: '九宫格',
        module: require('./src/screens/collectionView/CollectionViewDemo'),
    },
];

// 二级页面
// CollectionView
export const COLLECTIONS = [
    {
        name: 'CollectionView_f',
        title: '九宫格',
        description: '经典九宫格',
        module: require('./src/screens/collectionView/CollectionView_f'),
    },
    {
        name: 'CollectionView_s',
        title: '九宫格',
        description: '自定义item排列方式',
        module: require('./src/screens/collectionView/CollectionView_f'),
    },
    {
        name: 'CollectionView_t',
        title: '九宫格',
        description: '某个section数据为空或其header为空',
        module: require('./src/screens/collectionView/CollectionView_f'),
    },
];