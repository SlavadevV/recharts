import { PopupButton } from '@typeform/embed-react'
import Button from '../Button/Button';
import { useEffect } from 'react';

const TypeForm = ({ setData }) => {
    useEffect(() => {
        fetch(`https://api.typeform.com/forms/PJ1tgUNv/responses?included_response_ids=zeeji8jl0z7otiqzvzeexgymvj11w120`, {
            headers: {
                'authorization': 'bearer ' + 'tfp_C1AhRvvVmC45oJ3Th19ckvhtipLFvdukbFde2RmaQ7zi_e52zcqM7DMvc'
            }
        })
            .then((res) => res.json())
            .then((res) => setData(res.items[0].answers))
    }, [])

    const test = (payload) => {
        fetch(`https://api.typeform.com/forms/PJ1tgUNv/responses?included_response_ids=${payload.responseId}`, {
            headers: {
                'authorization': 'bearer ' + 'tfp_C1AhRvvVmC45oJ3Th19ckvhtipLFvdukbFde2RmaQ7zi_e52zcqM7DMvc'
            }
        })
            .then((res) => res.json())
            .then((res) => setData(res.items[0].answers))
    }

    return (
        <PopupButton onSubmit={test} id="PJ1tgUNv" style={{ fontSize: 20 }} className="my-button">
            <Button>Type Form</Button>
        </PopupButton>
    )
}

export default TypeForm;
