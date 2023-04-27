import Page from './page.js';
/**
 * sub page containing specific selectors and methods for a specific page
*/

class dynamicPage extends Page 
{

    get startButton () {
        return $('#start > button');
    }

    get header4 () {
        return $('#content > div > h4');
    }


    
    open() {
        return super.open('/dynamic_loading/1');
    }
}

export default new dynamicPage();

