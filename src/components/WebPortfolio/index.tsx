// Web Portfolio Component
// =============================================================

// Dependencies
// =============================================================
import React from "react";
import { IWebPortfolio } from "../../common/types"
import { webProjects } from "../../common/portfolioProjects";

// Main
// =============================================================
function WebPortfolio() {

    // Map Functions
    // =============================================================
    // Portfolio Projects
    function mapPortfolio(item: IWebPortfolio) {
        return (
            <div className="column is-two-fifths card" key={item.id}>
                <div className="card-image level">
                    <img className="cardImage" src={item.image}
                        alt={`${item.title} screenshot`} />
                </div>
                <div className="columns is-desktop">
                    <div className="column is-three-fifths">
                        <div className="card-header">
                            <p className="card-header-title is-centered">
                                {item.title}
                            </p>
                        </div>
                        <div className="card-content">
                            <p className="content">
                                {item.desc}
                            </p>
                        </div>
                            <hr className="smallHR"/>
                        <div>
                            <p className="is-centered card-header-title">Role</p>
                            <hr className="smallHR"/>
                            <p className="content">
                                {item.job}
                            </p>
                        </div>
                    </div>
                    <div className="column">
                        <div>
                            <hr className="smallHR"/>
                                <p className="is-centered card-header-title">Technology</p>
                            <hr className="smallHR"/>
                            <div className="content">
                                <ul>
                                    {item.tools.map(mapTools)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    <a href={item.appLink} className="card-footer-item" target="_blank"
                        rel="noreferrer noopener">See the App</a>
                    <a href={item.sourceLink} className="card-footer-item" target="_blank"
                        rel="noreferrer noopener">View the Code</a>
                </footer>
            </div>
        )
    };

    // Tools Array
    function mapTools(arr: string) {
        return (
            <li key={arr}>{arr}</li>
        )
    }

    // Render
    // =============================================================
    return (
        <div className="centered" id="webPortfolio">
            <h3 className="sectionTitle">Web Dev Portfolio</h3>
            <div className="columns is-multiline is-centered">
                {webProjects.map(mapPortfolio)}
            </div>
        </div>
    )
}

// Exports
// =============================================================
export default WebPortfolio;