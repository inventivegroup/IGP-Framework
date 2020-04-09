import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BladeContainer from '../general/BladeContainer';

let key = 0;
const idKey = () => key++;


let DropAction = (props) => {
    return(
        <TransitionGroup>
            <CSSTransition
                key={props.id}
                timeout={3000}
                classNames="zanimate"
                appear
                unmountOnExit
            >
                <div className="drop-subtitle" style={{textAlign: (props.check && (props.check[0].text !== '') ? false : 'center'), width: (props.check && (props.check[0].text !== '') ? false : '100%')}}>{props.dropItem}</div>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default ({slice}) => {
    let { section_title, gradient_angle, primary_blade_color, secondary_blade_color, divider_bottom, divider_top, font_shade } = slice.primary
    let skills = [];
    let count = 0;
    for (let item of slice.fields){
        if (item.section_subtitle && (item.section_subtitle[0].text !== '')){
            skills.push(item);
        }
    }
    const [drop, dropInterval] = useState([skills[count], true]);

    useEffect(() => {
        const interval = setInterval(() => {
            dropInterval(() => {
                if (count === skills.length - 1){
                    count = 0;
                    return [skills[count], true];
                }
                count += 1;
                return [skills[count], true];
            })
        }, 3000);
        return () => clearInterval(interval);
    }, [])

    return(
        <BladeContainer topDivider={divider_top} bottomDivider={divider_bottom} primaryColor={primary_blade_color} secondaryColor={secondary_blade_color} gradient={gradient_angle}>
            <div className={"drop-in mx-5 light d-flex flex-column flex-lg-row justify-content-center align-items-center" + (section_title && (section_title[0].text !== '') ? ' justify-content-lg-start' : '')} style={{color: (font_shade === 'white' ? 'white' : '#1E2D3D')}}>
                {section_title && (section_title[0].text !== '') ? <h2 className="drop-title">{section_title[0].text}</h2> : false}
                <div className="subtitle-container" style={{width: section_title && (section_title[0].text !== '') ? false : '70%'}}>
                    {drop[0] ? <DropAction id={idKey()} dropItem={drop[0].section_subtitle[0].text} check={section_title}/> : false}
                </div>
            </div>
        </BladeContainer>
    );
}