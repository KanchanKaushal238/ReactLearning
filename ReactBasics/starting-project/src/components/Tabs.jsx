export default function Tabs({children, buttons, ButtonContainer = 'menu', ...props}){
    // const ButtonContainerVar = buttonContainer;
    return (
        <>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        <div {...props}>{children}</div>
        </>
    );
}