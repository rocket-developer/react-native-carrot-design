/*
 * @Description: Type definitions for react-native-carrot-design
 * @Author: wanglh
 * @LastEditors: wanglh
 * @Date: 2019-03-11 18:02:58
 * @LastEditTime: 2020-06-03 16:30:43
 */

// import { BannerViewProps, TextInputViewProps } from "react-native-carrot-design";

declare module 'react-native-carrot-design' {
    import { ViewStyle, SectionListScrollParams, NativeSyntheticEvent, TextInputEndEditingEventData, ImageSourcePropType } from 'react-native'
    import { Component } from 'react'

    /****** ButtonViewProps ******/
    export interface ButtonViewProps {

        /**
         * Determines what the opacity of the wrapped view should be when touch is active.
         * Defaults to 0.2
         */
        activeOpacity?: number,

        /**
         * Text of the button.
         */
        title: string,

        /**
         * If true, disable all interactions for this component.
         */
        disabled?: boolean,

        /**
         * The style of the title.
         */
        btnTitleStyle?: ViewStyle
        
        /**
         * The style of the parent view of the title.
         */
        btnViewStyle?: ViewStyle

        /**
         * Called when the touch is released,
         * but not if cancelled (e.g. by a scroll that steals the responder lock).
         */
        onPressCallback?: () => void,
    }
    
    export class ButtonView extends Component<ButtonViewProps, any> {
    }

    /****** CornerTextViewProps ******/
    export interface CornerTextViewProps {
        /**
         * Text to display.
         */
        title: string,

        /**
         * The style of the parent view of the title.
         */
        cornerStyle?: ViewStyle

        /**
         * The style of the title.
         */
        textStyle?: ViewStyle
    }

    export class CornerTextView extends Component<CornerTextViewProps, any> {
    }

    /****** LoadingViewProps ******/
    export interface LoadingViewProps {

        /**
         * Control whether the display is loaded by default.
         */
        hide?: boolean,
    }

    export class LoadingView extends Component<LoadingViewProps> {

        /**
         * Called when you want to show loading.
         */
        show(): void;

        /**
         * Called when you want to close loading.
         */
        close(): void;
    }

    /****** AlertViewProps ******/
    export interface AlertViewProps {
        /**
         * 可选(默认距离屏幕左右30)
         * 设置弹窗宽度
         */
        alertWidth?: number,
        /**
         * 可选(默认#FE2842)
         * 设置确认按钮颜色
         */
        mainColor?: string,
        /**
         * 可选,不填写则不显示标题
         * 设置标题文案
         */
        title?: string,
        /**
         * 可选,不填写则不显示文本内容区域
         * 设置内容区域文案
         */
        content?: string,
        /**
         * 可选,不填写则不显示确认按钮
         * 设置确认按钮文案
         */
        okText?: string,
        /**
         * 可选,不填写则不显示取消按钮
         * 设置取消按钮文案
         */
        cancelText?: string,
        /**
         * 可选,默认为文本类型
         * 设置内容区域类型,暂分为输入框和文本类型,AlertView.DialogType.INPUT(输入框) AlertView.DialogType.TEXT(文本)
         */
        contentType?: string,
        /**
         * 可选
         * 如果为输入类型,可控制输入最大长度
         */
        alertInputMaxLength?: number,
        /**
         * 可选
         * 如果为输入类型,可获取input回调的文案
         */
        alertCallback?: () => void,
        /**
         * 可选
         * 确认按钮点击事件
         */
        onOk?: () => void,
        /**
         * 可选
         * 取消按钮点击事件
         */
        onCancel?: () => void,
        /**
         * 可选
         * 自定义view
         */
        customContentView?: () => void,
        /**
         * 可选
         * 点击空白区域是否可以隐藏alert
         */
        isHideOnTouchOutside?: boolean,
        /**
         * 可选(Android可用)
         * 点击back键是否隐藏alert
         */
        isHideOnBackkey?: boolean,
    }

    export class AlertView extends Component<AlertViewProps> {
        /**
         * 控制alert显示隐藏
         * @param visible
         */
        setAlertVisible(visible: boolean): void;
    }

    /****** TextInputViewProps ******/
    export interface TextInputViewProps {
        /**
         * Determines what the opacity of the wrapped view should be when touch is active.
         * Defaults to 1
         */
        activeOpacity?: number,

        /**
         * Is there a left side view, the type of the left side view.
         * - `image`: The left side view is image.
         * - `text`: The left side view is text.
         * - undefined: No left side view.
         */
        leftType?: "image" | "text" | undefined,

        /**
         * The layout style of the left image.
         */
        imageStyle?: ViewStyle,

        /**
         * The left image source (either a remote URL or a local file resource).
         */
        leftImageSource?: ImageSourcePropType,
        
        /**
         * The content of the left title.
         */
        leftTitle?: string,

        /**
         * The layout style of the view.
         */
        inputBgStyle?: ViewStyle,

        /**
         * The layout style of the input.
         */
        inputStyle?: ViewStyle,

        /**
         * The layout style of the left title.
         */
        titleStyle?: ViewStyle,
        
        /**
         * Specifies whether fonts should scale to respect Text Size accessibility settings.
         * The default is `true`.
         */
        allowFontScaling?: boolean,

        /**
         * If false, disables auto-correct.
         * The default value is true.
         */
        autoCorrect?: boolean,

        /**
         * If true, focuses the input on componentDidMount.
         * The default value is false.
         */
        autoFocus?: boolean,

        /**
         * If true, the text field will blur when submitted.
         * The default value is true.
         */
        blurOnSubmit?: boolean,

        /**
         * If true, caret is hidden. The default value is false.
         */
        caretHidden?: boolean,

        /**
         * If true, context menu is hidden. The default value is false.
         */
        contextMenuHidden?: boolean,

        /**
         * Provides an initial value that will change when the user starts typing.
         * Useful for simple use-cases where you don't want to deal with listening to events
         * and updating the value prop to keep the controlled state in sync.
         */
        defaultValue?: string,

        /**
         * If false, text is not editable. The default value is true.
         */
        editable?: boolean,

        /**
         * enum("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad',
         * 'decimal-pad', 'twitter', 'web-search', 'visible-password')
         * Determines which keyboard to open, e.g.numeric.
         * The following values work across platforms: - default - numeric - email-address - phone-pad
         * The following values work on iOS: - ascii-capable - numbers-and-punctuation - url - number-pad - name-phone-pad - decimal-pad - twitter - web-search
         * The following values work on Android: - visible-password
         */
        keyboardType?: string,

        /**
         * Limits the maximum number of characters that can be entered.
         * Use this instead of implementing the logic in JS to avoid flicker.
         */
        maxLength?: number,

        /**
         * The string that will be rendered before text input has been entered
         */
        placeholder?: string,

        /**
         * The text color of the placeholder string
         */
        placeholderTextColor?: string,

        /**
         * enum('default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call')
         * Determines how the return key should look.
         */
        returnKeyType?: string,

        /**
         * If true, clears the text field automatically when editing begins
         */
        clearTextOnFocus?: boolean,

        /**
         * If true, the text input obscures the text entered so that sensitive text like passwords stay secure.
         * The default value is false.
         */
        secureTextEntry?: boolean,
        
        /**
         * Callback that is called when text input ends.
         */
        onEndEditing?: (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void;

        /**
         * Callback that is called when the text input's submit button is pressed.
         */
        onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;

        /**
         * Callback that is called when the text input's text changes.
         * Changed text is passed as an argument to the callback handler.
         */
        onChangeText?: (text: string) => void,
    }
    
    export class TextInputView extends Component<TextInputViewProps, any> {
    }

    /****** BannerViewProps ******/
    export interface BannerViewProps {
        /**
         * Click banner to return the current banner index.
         * @param {number} index
         */
        onPressCallback?: (index: number) => void,
        /**
         * 0 means use • 1 to replace the picture
         */
        pageIndexType: number,
        /**
         * When not selected, the color of the page indicator
         */
        pageIndexNormalColor?: string,
        /**
         * When selected, the color of the page indicator
         */
        pageIndexSelectColor?: string,
        /**
         * Picture of page indicator when unchecked
         */
        pageIndexNormalImg?: any,
        /**
         * Picture of the page indicator when selected
         */
        pageIndexSelectImg?: any,
        /**
         * Execute every few seconds (in milliseconds)
         */
        duration?: number,
        /**
         * Default picture
         */
        bannerDefaultImg?: any,
        /**
         * Banner data source
         */
        bannerData: object,
        /**
         * Take the key of the banner picture
         */
        bannerKey: string,
        /**
         * Banner cache strategy
         */
        bannerCache?: string,
        /**
         * Container layout
         */
        bannerStyle?: ViewStyle,
        /**
         * Banner image layout
         */
        bannerImageStyle?: ViewStyle,
        /**
         * Page indicator layout
         */
        pageIndexViewMoreStyle?: ViewStyle,
        /**
         * Page indicator icon layout
         */
        pageIndexMoreStyle?: ViewStyle,
        /**
         * control to scroll
         */
        bannerCanScroll?: boolean,
    }
    export class BannerView extends Component<BannerViewProps, any> {
    }

    /****** PictureBrowserViewProps ******/
    export interface PictureBrowserViewProps {
        /**
         * Click event to exit image browsing event
         * @param {number} index
         */
        onPressCallback?: (index: number) => void,
        /**
         * Currently displayed image index
         */
        currentTapIndex: number,
        /**
         * Whether to show the image browser
         */
        modalVisible: boolean,
        /**
         * Saved image to local long press event
         */
        onSaveCallback?: (index: number) => void,
        /**
         * Whether to hide the saved image to the local popup window
         */
        isHideSavePhotoView: boolean,
        /**
         * Default picture
         */
        browserDefaultImg?: any,
        /**
         * Image browser data source
         */
        browserData: object,
        /**
         * Key of picture browser image resource
         */
        browserKey: string,
        /**
         * Key of picture viewer image title
         */
        browserNameKey?: string,
        /**
         * Cache strategy
         */
        browserCache?: string,
        /**
         * Container layout
         */
        browserStyle?: ViewStyle,
        /**
         * draw save button
         */
        drawSaveButton?: boolean,
    }
    export class PictureBrowserView extends Component<PictureBrowserViewProps, any> {
    }

    /****** CollectionViewProps ******/
    export interface CollectionViewProps {
        
        /**
         * An array of objects with data for each section header.
         */
        headerSource?: Array,

        /**
         * An array of objects with data for each section.
         */
        dataSource: Array,

        /**
         * The layout style of the each section.
         */
        sectionStyle?: ViewStyle,

        /**
         * The layout style of the each item.
         */
        itemStyle?: ViewStyle,

        /**
         * Renderer for every item in every section.
         */
        renderItem?: (item: object, sectionIndex: number, itemIndex: number) => React.ReactElement | null,

        /**
         * Rendered at the top of each section. Sticky headers are not yet supported.
         */
        renderSectionHeader?: (headerItem: object, sectionIndex: number) => React.ReactElement | null,

        /**
         * Rendered at the bottom of each section.
         */
        renderSectionFooter?: (sectionIndex: number) => React.ReactElement | null,

        /**
         * Rendered in between each section. Render at the top and bottom of each section
         */
        renderSectionSeparator?: React.ReactElement | null,

        /**
         * Rendered when the section is empty.
         */
        renderSectionEmptyComponent?: React.ReactElement | null,

        /**
         * Rendered at the top of the collectionView.
         */
        renderHeaderComponent?: React.ReactElement | null,

        /**
         * Rendered at the bottom of the collectionView.
         */
        renderFooterComponent?: React.ReactElement | null,

        /**
         * Rendered when the collectionView is empty.
         */
        renderEmptyComponent?: React.ReactElement | null,

        /**
         * Makes section headers stick to the top of the screen until the next one pushes it off.
         * Only enabled by default on iOS because that is the platform standard there.
         */
        stickySectionHeadersEnabled: PropTypes.bool,

        /**
         * How many items to render in the initial batch
         */
        initialNumToRender?: PropTypes.number,

        /**
         * Called once when the scroll position gets within onEndReachedThreshold of the rendered content.
         */
        onEndReached?: ((info: { distanceFromEnd: number }) => void) | null;
        
        /**
         * How far from the end (in units of visible length of the list) the bottom edge of the
         * list must be from the end of the content to trigger the `onEndReached` callback.
         * Thus a value of 0.5 will trigger `onEndReached` when the end of the content is
         * within half the visible length of the list.
         */
        onEndReachedThreshold?: number,

        /**
         * Reverses the direction of scroll. Uses scale transforms of -1.
         */
        inverted?: boolean,
    }

    export class CollectionView extends Component<CollectionViewProps, any> {
    
        /**
         * Scrolls to the item at the specified sectionIndex and itemIndex (within the section)
         * positioned in the viewable area such that viewPosition 0 places it at the top
         * (and may be covered by a sticky header), 1 at the bottom, and 0.5 centered in the middle.
         * Valid params keys are:
         * 'animated' (boolean) - Whether the list should do an animation while scrolling. Defaults to true.
         * 'itemIndex' (number) - Index within section for the item to scroll to. Required.
         * 'sectionIndex' (number) - Index for section that contains the item to scroll to. Required.
         * 'viewOffset' (number) - A fixed number of pixels to offset the final target position, e.g. to compensate for sticky headers.
         * 'viewPosition' (number) - A value of 0 places the item specified by index at the top, 1 at the bottom, and 0.5 centered in the middle.
         */
        scrollToLocation?(params: SectionListScrollParams): void;
        
        /**
         * Tells the list an interaction has occured, which should trigger viewability calculations,
         * e.g. if waitForInteractions is true and the user has not scrolled. This is typically called
         * by taps on items or by navigation actions.
         */
        recordInteraction: () => void;

        /**
         * Displays the scroll indicators momentarily.
         */
        flashScrollIndicators: () => void;
    }

    /****** TabSelectViewProps ******/
    export interface TabSelectViewProps {

        /** 需要展示的选项值的key
         * 比如：[{title:'视频介绍'},{title:'车型介绍'}].就传'title'
         */
        jsonKey: string,
        /** 按钮数据源
        * 单个元素必须包含jsonKey键值对,比如：[{title:'视频介绍'},{title:'车型介绍'}].
        */
        dataSource: Array,
        /** 默认选中按钮的索引
        * 默认选中第一个按钮，即0
        */
        selectIndex?: number,
        /** 是否显示按钮下划线
        * 默认显示
        */
        showBtnBottomLine?: boolean,
        /** 整个tabView的布局
         * 默认高为44，宽为屏幕宽
         */
        bgViewStyle?: ViewStyle,
        /** 单个按钮的布局
         * 默认高为44，宽为屏幕宽/按钮个数
         */
        itemStyle?: ViewStyle,
        /** 按钮标题的默认样式
         * fontSize: 15,color: '#666666',
         */
        itemTitleNormalStyle?: ViewStyle,
        /** 按钮标题的选中样式
         * fontSize: 15,color: '#EC192E',
         */
        itemTitleSelectStyle?: ViewStyle,
        /** 按钮下划线的样式
         * 默认高4，宽30,backgroundColor:'#EC192E',
         */
        itemLineStyle?: ViewStyle,

        /** 自定义单个按钮
        * 当自定义renderItem时,itemStyle,itemTitleNormalStyle,itemTitleSelectStyle,itemLineStyle,selectCallback均无效
        */
        renderItem?: (item: object) => React.ReactElement | null,
        
        /**
        * 按钮点击时的透明效果(0~1)
        * Defaults to 1
        */
        activeOpacity?: number,
        
        /** 选中item的回调,回调内容(item:当前按钮的数据源, selectIndex:当前选中的按钮索引)
        * 当自定义renderItem时失效
        * @param {object} item 选中的tab对应的数据对象
        * @param {number} index 选中的tab对应的索引
        */
        selectCallback?: (item:object, index: number) => void,
    }
    export class TabSelectView extends Component<TabSelectViewProps, any> {
    }
}
