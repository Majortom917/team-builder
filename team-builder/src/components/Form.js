import React, {useState} from 'react';
import './Form';



function form(event){
var formValues = {
    fname:'',
    email: '',
    role: '',

}
var newForm = {
    ...formValues, [event.target.name]: event.target.value,
}
}