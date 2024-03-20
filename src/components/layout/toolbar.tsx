
import "./toolbar.css";
import "../layout-icon/template bilder icon march 8/css/style.css";
import { getIcon } from "../constant/Helper";
import { useState } from "react";

const Toolbar = () => {
  const [isChecked, setIsChecked] = useState(true);

  
  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="toolbar-container">
      {/* Grid */}
      <div className="gridContainer">
        <div className="gridItem">
          <div className="gridText">Grid</div>
        </div>
      </div>
      <div className="componentWrapper">
        <div className="columnWrapper">
          <div className="columnTitle">Column</div>
          <div className="columnContent">
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="0"
              defaultValue="0"
            />
          </div>
        </div>
        <div className="rowWrapper">
          <div className="rowTitle">Row</div>
          <div className="rowContent">
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="0"
              defaultValue="0"
            />
          </div>
        </div>
      </div>

      {/* Spacing */}
      <div className="gap">
        <div className="spacingWrapper">
          <div className="spacingHeader">
            <div className="spacingTitle">Spacing</div>
          </div>
          <div className="spacingContent">
            <div className="spacingItem">
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                defaultValue="0"
              />
            </div>
          </div>
        </div>

        <div className="marginWrapper">
          <div className="marginHeader">
            <div className="marginTitle">Margin</div>
          </div>
          <div className="marginContent">
            <div className="marginItem">
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                defaultValue="0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="gap">
        <div className="spacingWrapper">
          <div className="spacingHeader">
            <div className="spacingTitle">Horizontal</div>
          </div>
          <div className="spacingContent">
            <div className="spacingItem">
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                defaultValue="0"
              />
            </div>
          </div>
        </div>
        <div className="spacingWrapper">
          <div className="spacingHeader">
            <div className="spacingTitle">Vertical</div>
          </div>
          <div className="spacingContent">
            <div className="spacingItem">
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                defaultValue="0"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Margin */}


      {/* Corner radius */}
      <div className="cornerRadiusContainer">
        <div className="cornerRadiusHeader">
          <div className="marginTitle">Corner radius</div>
        </div>
        <div className="cornerRadiusContent">
          <div className="cornerRadiusItem">
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="0"
              defaultValue="0"
            />
          </div>
        </div>
      </div>

      {/* Stoke */}
      <div className="stokeContainer">
        <div className="stokeHeader">
          <div className="headerText">Stoke</div>
        </div>
        <div className="stoke">
          <div className="stokeContent">
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="0"
              defaultValue="0"
            />
          </div>
          <div className="colorBox"></div>
        </div>
      </div>
      {/* Shadow */}
      <div className="shadowContainer">
        <div className="shadowHeader">
          <div className="headerText">Shadow</div>
        </div>
        <div className="shadowItem">
          <div className="shadowContent">
            <div className="shadowBox">
              <div className="shadow">
                <label className="switch">
                <input type="checkbox" checked={isChecked} onChange={handleToggleChange}></input>
                  <span className="slider round"></span>
                </label>
                <div className="colorBox"></div>
              </div>
              <div className="all-shadows">
                <div className="shadowInner">
                  <div className="shadow-icon">
                    <i className={getIcon("light-shadow-top")}></i>
                  </div>
                  <div className="shadow-icon">
                    <i className={getIcon("light-shadow-topleft")}></i>
                  </div>
                  <div className="shadow-icon">
                    <i className={getIcon("light-shadow-right")}></i>
                  </div>
                  <div className="shadow-icon">
                    <i className={getIcon("light-shadow-bottomleft")}></i>
                  </div>
                  <div className="shadow-icon">
                    <i className={getIcon("light-shadow-bottom")}></i>
                  </div>
                  <div className="shadow-icon">
                    <i className={getIcon("light-shadow-bottomright")}></i>
                  </div>
                  <div className="shadow-icon">
                    <i className={getIcon("light-shadow-left")}></i>
                  </div>
                  <div className="shadow-icon">
                    <i className={getIcon("light-shadow-centre")}></i>
                  </div>
                  <div className="shadow-icon">
                    <i className={getIcon("light-shadow-topright")}></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadowBox">
              <div className="shadowInner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
