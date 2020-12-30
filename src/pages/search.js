import React from 'react';


class Search extends React.Component {
    render () {
        return (
            <div id="tg-search" className="tg-search">
            <button type="button" className="close"><i class="icon-cross"></i></button>
            <form>
                <fieldset>
                    <div className="form-group">
                        <input type="search" name="search" className="form-control" value="" placeholder="search here" />
                        <button type="submit" className="tg-btn"><span className="icon-search2"></span></button>
                    </div>
                </fieldset>
            </form>
            <ul className="tg-destinations">
                <li>
                    <a href="javascript:void(0);">
                        <h3>Europe</h3>
                        <em>(05)</em>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <h3>Africa</h3>
                        <em>(15)</em>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <h3>Asia</h3>
                        <em>(12)</em>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <h3>Oceania</h3>
                        <em>(02)</em>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <h3>North America</h3>
                        <em>(08)</em>
                    </a>
                </li>
            </ul>
        </div>
            
        );
    }
}
export default Search;
