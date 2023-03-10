import { PropType } from 'vue';
export interface MarqueeProps {
    direction: 'normal' | 'reverse';
    duration: number;
    delay: number;
    loop: number;
    clone: boolean;
    gradient: boolean;
    gradientColor: any;
    gradientWidth: string;
    pauseOnHover: boolean;
    pauseOnClick: boolean;
}
declare const _default: import("vue").DefineComponent<{
    direction: {
        type: PropType<"reverse" | "normal">;
        default: string;
    };
    duration: {
        type: PropType<number>;
        default: number;
    };
    delay: {
        type: PropType<number>;
        default: number;
    };
    loop: {
        type: PropType<number>;
        default: number;
    };
    clone: {
        type: PropType<boolean>;
        default: boolean;
    };
    gradient: {
        type: PropType<boolean>;
        default: boolean;
    };
    gradientColor: {
        type: PropType<any>;
        default: number[];
    };
    gradientWidth: {
        type: PropType<string>;
        default: string;
    };
    pauseOnHover: {
        type: PropType<boolean>;
        default: boolean;
    };
    pauseOnClick: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    ready: import("vue").Ref<boolean>;
    contentWidth: import("vue").Ref<number>;
    containerWidth: import("vue").Ref<number>;
    loopCounter: import("vue").Ref<number>;
    loopInterval: any;
    minWidth: import("vue").Ref<string>;
    marqueeContent: any;
    marqueeContainer: any;
    componentKey: import("vue").Ref<number>;
    showGradient: import("vue").ComputedRef<boolean>;
    cloneAmount: import("vue").Ref<number>;
    ForcesUpdate: () => Promise<void>;
    checkForClone: () => Promise<void>;
    setupMarquee: () => Promise<void>;
    getCurrentStyle: any;
    hoverStarted: () => void;
    hoverEnded: () => void;
    mouseDown: () => void;
    mouseUp: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("onPause" | "onComplete" | "onLoopComplete" | "onResume")[], "onPause" | "onComplete" | "onLoopComplete" | "onResume", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    direction: {
        type: PropType<"reverse" | "normal">;
        default: string;
    };
    duration: {
        type: PropType<number>;
        default: number;
    };
    delay: {
        type: PropType<number>;
        default: number;
    };
    loop: {
        type: PropType<number>;
        default: number;
    };
    clone: {
        type: PropType<boolean>;
        default: boolean;
    };
    gradient: {
        type: PropType<boolean>;
        default: boolean;
    };
    gradientColor: {
        type: PropType<any>;
        default: number[];
    };
    gradientWidth: {
        type: PropType<string>;
        default: string;
    };
    pauseOnHover: {
        type: PropType<boolean>;
        default: boolean;
    };
    pauseOnClick: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    onOnPause?: (...args: any[]) => any;
    onOnComplete?: (...args: any[]) => any;
    onOnLoopComplete?: (...args: any[]) => any;
    onOnResume?: (...args: any[]) => any;
}, {
    direction: "reverse" | "normal";
    clone: boolean;
    duration: number;
    loop: number;
    delay: number;
    gradient: boolean;
    gradientColor: any;
    gradientWidth: string;
    pauseOnHover: boolean;
    pauseOnClick: boolean;
}>;
export default _default;
