import React from 'react';

const addHeader = (WrapperComponent, classes) => {
    return (props) => (
        <header className={classes}>
            {/* must start with cap letter  */}
            <WrapperComponent />
        </header>
    )
}

export default addHeader;