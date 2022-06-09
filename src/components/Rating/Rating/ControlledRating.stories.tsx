import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ControlledRating from "./ControlledRating";
import {RatingValueType} from "../../../App";
import {func} from "prop-types";

type RatingPropsType={
    rating:RatingValueType
    setRating: (props:RatingValueType)=>void
}
const someValue:RatingValueType = 5

export default {
    title: 'ControlledRating stories',
    component: ControlledRating,
    argTypes:{
        setRating:function (props:RatingValueType) {
            
        }
    }
} as ComponentMeta<typeof ControlledRating>;

const Template: ComponentStory<typeof ControlledRating> = (args) => <ControlledRating {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};

export const Secondary = Template.bind({});
Secondary.args = {
    setRating(props){}

}

