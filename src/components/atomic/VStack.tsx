import React, {PropsWithChildren} from 'react';

const VStack = (props: PropsWithChildren<{style?: any}>) => {
    let style = props.style;
    return (
        <div style={{...props.style, width: style?.width? style.width: '100%', height: style?.height? style.height: '100%',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'flex-start'}}>

            {props.children}

        </div>
    );
};

export default VStack;