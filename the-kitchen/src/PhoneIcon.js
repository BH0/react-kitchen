import React from "react";
import { Component } from "react"; 
import Tippy from '@tippyjs/react';

class PhoneIcon extends Component {
    render() { 
        return (
            <Tippy content="00000 (click icon to copy to clipboard)">
            <button>
                <i className="fas fa-phone"></i> 
            </button>
          </Tippy>
        );
    }
}
 
export default PhoneIcon;
