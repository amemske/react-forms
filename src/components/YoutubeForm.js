import React from 'react'; //rsf command
import {Button} from '../styles/SimpleFormStyle';
import {Form} from '../styles/SimpleFormStyle';
import {Input} from '../styles/SimpleFormStyle';
import {Label} from '../styles/SimpleFormStyle';
import {MainContainer} from '../styles/GlobalStyles';


function YoutubeForm() {
    return (
        <MainContainer>
            <Form>
                <div>
                    <Label htmlFor='name'> Name</Label>
                    <Input type='text' id='name' name='name'/>
                </div>
                <div>
                    <Label htmlFor='email'> E-mail</Label>
                    <Input type='email' id='email' name='email'/>
                </div>
                <div>
                    <Label htmlFor='channel'> Channel</Label>
                    <Input type='text' id='channel' name='channel'/>
                </div>
                <Button type='button'>Submit</Button>

            </Form>
            
        </MainContainer>
    )
}

export default YoutubeForm;