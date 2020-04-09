
import React from 'react';


export default ({ topDivider, bottomDivider, primaryColor, secondaryColor, gradient, backgroundImage, video, children}) => {
    const getColor = (color) => {
        const res = (() => {
            switch(color){
                case "smoke":
                    return '#E0E6ED';
                
                case "studios":
                    return '#7E5BEF';
      
                case "studios light":
                    return '#A389F4';
      
                case "studios dark":
                    return '#592DEA'
      
                case "studios black":
                    return '#14001D'
      
      
                case "patriots":
                    return '#0000FF'
      
                case "patriots light":
                    return '#0066ff'
      
                case "patriots dark":
                    return '#0000b2'
      
                case "patriots black":
                    return '#000033'
      
      
                case "inventive":
                    return '#1FB6FF'
      
                case "inventive light":
                    return '#85D7FF'
      
                case "inventive dark":
                    return '#009EEB'
      
                case "inventive black":
                    return '#00151A'
      
      
                case "cares":
                    return '#13CE66'
      
                case "cares light":
                    return '#29EB7F'
      
                case "cares dark":
                    return '#0F9F4F'
      
                case "cares black":
                    return '#002A02'
      
      
                case "staffing":
                    return '#FFC82C'
      
                case "staffing light":
                    return '#FFD55F'
      
                case "staffing dark":
                    return '#F8B700'
      
                case "staffing black":
                    return '#1A1A00'
      
      
                case "academy":
                    return '#FE8A00'
      
                case "academy light":
                    return '#FFA827'
      
                case "academy dark":
                    return '#DB7000'
      
                case "academy black":
                    return '#331C00'
      
      
                case "ventures":
                    return '#FE0500'
      
                case "ventures light":
                    return '#FF6E6B'
      
                case "ventures dark":
                    return '#D40000'
      
                case "ventures black":
                    return '#330100'
      
                case "white":
                    return '#ffffff'
      
                case "none" : 
                    return '100%, white'
    
                default:
                    return 'white';
            }
        })();
      
        return res;
    }
    
    const getTopDivider = (topDivider) => {
        switch(topDivider){
            case "none":
                return false;
            case "diagonal_top": return(
                <div className="top diagonal_top"></div>
            );
            case "diagonal_top_flipped": return(
                <div className="top diagonal_top_horizontally"></div>
            );
            case "round_top": return (
                <svg className="top inverted svg100" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none"><g fill="#FFF"><path d="M1280 140V0S993.46 140 640 139 0 0 0 0v140z"/></g></svg>
            );
            case "round_top_inverted": return(
                <svg className="top svg100" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none"><g fill="#FFF"><path d="M640 140C286.54 140 0 0 0 0h1280S993.46 140 640 140z"/></g></svg>
            );
            case "wavy_top": return(
                <svg className="top svg100" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF"><path d="M0 0v100c20 17.3 40 29.51 80 29.51 51.79 0 74.69-48.57 151.75-48.57 73.72 0 91 54.88 191.56 54.88C543.95 135.8 554 14 665.69 14c109.46 0 98.85 87 188.2 87 70.37 0 69.81-33.73 115.6-33.73 55.85 0 62 39.62 115.6 39.62 58.08 0 57.52-46.59 115-46.59 39.8 0 60 22.48 79.89 39.69V0z"/></g></svg>
            );
            case "wavy_top_flipped": return(
                <svg className="top horizontally svg100" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF"><path d="M0 0v100c20 17.3 40 29.51 80 29.51 51.79 0 74.69-48.57 151.75-48.57 73.72 0 91 54.88 191.56 54.88C543.95 135.8 554 14 665.69 14c109.46 0 98.85 87 188.2 87 70.37 0 69.81-33.73 115.6-33.73 55.85 0 62 39.62 115.6 39.62 58.08 0 57.52-46.59 115-46.59 39.8 0 60 22.48 79.89 39.69V0z"/></g></svg>
            );
            case "wavy_top_inverted": return(
                <svg className="top inverted svg100" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF"><path d="M1280 86c-19.9-17.21-40.08-39.69-79.89-39.69-57.49 0-56.93 46.59-115 46.59-53.61 0-59.76-39.62-115.6-39.62C923.7 53.27 924.26 87 853.89 87c-89.35 0-78.74-87-188.2-87C554 0 543.95 121.8 423.32 121.8c-100.52 0-117.84-54.88-191.56-54.88-77.06 0-100 48.57-151.75 48.57-40 0-60-12.21-80-29.51v54H1280z"/></g></svg>
            );
            case "wavy_top_inverted_flipped": return(
                <svg className="top inverted_horizontally svg100" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF"><path d="M1280 86c-19.9-17.21-40.08-39.69-79.89-39.69-57.49 0-56.93 46.59-115 46.59-53.61 0-59.76-39.62-115.6-39.62C923.7 53.27 924.26 87 853.89 87c-89.35 0-78.74-87-188.2-87C554 0 543.95 121.8 423.32 121.8c-100.52 0-117.84-54.88-191.56-54.88-77.06 0-100 48.57-151.75 48.57-40 0-60-12.21-80-29.51v54H1280z"/></g></svg>
            );
            case "swoosh_top": return(
                <svg className="top inverted svg158" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none"><g fill="#FFF"><path d="M320 28c320 0 320 84 640 84 160 0 240-21 320-42v70H0V70c80-21 160-42 320-42z"/></g></svg>
            );
            case "swoosh_top_flipped": return(
                <svg className="top inverted_horizontally svg158" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none"><g fill="#FFF"><path d="M320 28c320 0 320 84 640 84 160 0 240-21 320-42v70H0V70c80-21 160-42 320-42z"/></g></svg>
            );
            case "swooshShadow_top": return (
                <>
                    <svg className="top inverted svg158" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none"><g fill="#FFF"><path d="M320 28c320 0 320 84 640 84 160 0 240-21 320-42v70H0V70c80-21 160-42 320-42z"/></g></svg>
                    <svg className="top inverted_horizontally svg158" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none"><g fill="#ffffff1a"><path d="M320 28c320 0 320 84 640 84 160 0 240-21 320-42v70H0V70c80-21 160-42 320-42z"/></g></svg>
                </>
            );
            case "swooshShadow_top_flipped": return (
                <>
                    <svg className="top inverted_horizontally svg158" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none"><g fill="#FFF"><path d="M320 28c320 0 320 84 640 84 160 0 240-21 320-42v70H0V70c80-21 160-42 320-42z"/></g></svg>
                    <svg className="top inverted svg158" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none"><g fill="#ffffff1a"><path d="M320 28c320 0 320 84 640 84 160 0 240-21 320-42v70H0V70c80-21 160-42 320-42z"/></g></svg>
                </>
            );
            default:
                return false;
        }
    }
    
    const getBottomDivider = (bottomDivider) => {
        switch(bottomDivider) {
            case "none":
                return false;
            case "diagonal_bottom": return (
                <div class="bottom diagonal_bottom"></div>
            );
            case "diagonal_bottom_flipped": return (
                <div class="bottom diagonal_bottom_horizontally"></div>
            );
            case "round_bottom": return (
                <svg class="bottom inverted svg100" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none"><g fill="#FFF"><path d="M640 140C286.54 140 0 0 0 0h1280S993.46 140 640 140z"/></g></svg>
            );
            case "round_bottom_inverted": return (
                <svg class="bottom svg100" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none"><g fill="#FFF"><path d="M1280 140V0S993.46 140 640 139 0 0 0 0v140z"/></g></svg>
            );
            case "wavy_bottom": return (
                <svg class="bottom svg100" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF"><path d="M1280 86c-19.9-17.21-40.08-39.69-79.89-39.69-57.49 0-56.93 46.59-115 46.59-53.61 0-59.76-39.62-115.6-39.62C923.7 53.27 924.26 87 853.89 87c-89.35 0-78.74-87-188.2-87C554 0 543.95 121.8 423.32 121.8c-100.52 0-117.84-54.88-191.56-54.88-77.06 0-100 48.57-151.75 48.57-40 0-60-12.21-80-29.51v54H1280z"/></g></svg>
            );
            case "wavy_bottom_flipped": return (
                <svg class="bottom horizontally svg100" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF"><path d="M1280 86c-19.9-17.21-40.08-39.69-79.89-39.69-57.49 0-56.93 46.59-115 46.59-53.61 0-59.76-39.62-115.6-39.62C923.7 53.27 924.26 87 853.89 87c-89.35 0-78.74-87-188.2-87C554 0 543.95 121.8 423.32 121.8c-100.52 0-117.84-54.88-191.56-54.88-77.06 0-100 48.57-151.75 48.57-40 0-60-12.21-80-29.51v54H1280z"/></g></svg>
            );
            case "wavy_bottom_inverted": return (
                <svg class="bottom inverted svg100" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF"><path d="M0 0v100c20 17.3 40 29.51 80 29.51 51.79 0 74.69-48.57 151.75-48.57 73.72 0 91 54.88 191.56 54.88C543.95 135.8 554 14 665.69 14c109.46 0 98.85 87 188.2 87 70.37 0 69.81-33.73 115.6-33.73 55.85 0 62 39.62 115.6 39.62 58.08 0 57.52-46.59 115-46.59 39.8 0 60 22.48 79.89 39.69V0z"/></g></svg>
            );
            case "wavy_bottom_inverted_flipped": return (
                <svg class="bottom inverted_horizontally svg100" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF"><path d="M0 0v100c20 17.3 40 29.51 80 29.51 51.79 0 74.69-48.57 151.75-48.57 73.72 0 91 54.88 191.56 54.88C543.95 135.8 554 14 665.69 14c109.46 0 98.85 87 188.2 87 70.37 0 69.81-33.73 115.6-33.73 55.85 0 62 39.62 115.6 39.62 58.08 0 57.52-46.59 115-46.59 39.8 0 60 22.48 79.89 39.69V0z"/></g></svg>
            );
            case "swoosh_bottom": return (
                <svg class="bottom horizontally svg158" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none"><g fill="#FFF"><path d="M320 28c320 0 320 84 640 84 160 0 240-21 320-42v70H0V70c80-21 160-42 320-42z"/></g></svg>
            );
            case "swoosh_bottom_flipped": return (
                <svg class="bottom svg158" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none"><g fill="#FFF"><path d="M320 28c320 0 320 84 640 84 160 0 240-21 320-42v70H0V70c80-21 160-42 320-42z"/></g></svg>
            );
            case "swooshShadow_bottom": return (
                <>
                    <svg class="bottom horizontally svg158" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none"><g fill="#FFF"><path d="M320 28c320 0 320 84 640 84 160 0 240-21 320-42v70H0V70c80-21 160-42 320-42z"/></g></svg>
                    <svg class="bottom svg158" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none"><g fill="#ffffff1a"><path d="M320 28c320 0 320 84 640 84 160 0 240-21 320-42v70H0V70c80-21 160-42 320-42z"/></g></svg>
                </>
            );
            case "swooshShadow_bottom_flipped": return (
                <>
                    <svg class="bottom svg158" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none"><g fill="#FFF"><path d="M320 28c320 0 320 84 640 84 160 0 240-21 320-42v70H0V70c80-21 160-42 320-42z"/></g></svg>
                    <svg class="bottom horizontally svg158" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1280 140" preserveAspectRatio="none"><g fill="#ffffff1a"><path d="M320 28c320 0 320 84 640 84 160 0 240-21 320-42v70H0V70c80-21 160-42 320-42z"/></g></svg>
                </>
            );
            default:
                return false;
        }
    }
    return (
        <div className={"bladeContainer" + (topDivider === 'none' ? '' : ' topPadding') + (bottomDivider === 'none' ? '' : ' bottomPadding')} style={{backgroundImage: (backgroundImage ? `url(${backgroundImage.url})` : 'linear-gradient(' + (0 >= gradient || gradient > 360 ? ' 0' : gradient) + 'deg, ' + getColor(primaryColor) + ", " + getColor(secondaryColor) + ')') }}>
            {getTopDivider(topDivider)}
            {video ? <div className='video-container'>
                <video
                    autoPlay
                    muted
                    loop
                    className="backgroundVideo"
                >
                    <source src={video.url} type="video/mp4" />
                </video>
            </div> : false}
            {children}
            {getBottomDivider(bottomDivider)}
        </div>
    )
}