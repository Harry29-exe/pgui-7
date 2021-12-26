import React, {CSSProperties, HTMLAttributes, PropsWithChildren} from "react";

const HStack = (props: PropsWithChildren<{style?: CSSProperties}>) => {
    let style = props.style;
    return (
        <div style={{width: style?.width? style.width: '100%', height: style?.height? style.height: '100%',
            display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'flex-start',
            ...props.style}}>

            {props.children}

        </div>
    );
};

export default HStack;