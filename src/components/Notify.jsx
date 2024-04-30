import { useToast } from '@chakra-ui/react'

function UpdatingToastExample() {
    const toast = useToast()
    const toastIdRef = React.useRef()

    function update() {
        if (toastIdRef.current) {
            toast.update(toastIdRef.current, { description: 'new text' })
        }
    }

    function addToast() {
        toastIdRef.current = toast({ description: 'some text' })
    }

    return (
        <Stack isInline spacing={2}>
            <Button onClick={addToast} type='button'>
                Toast
            </Button>

            <Button onClick={update} type='button' variant='outline'>
                Update last toast
            </Button>
        </Stack>
    )
}