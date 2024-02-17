import { NavLink } from "react-router-dom";

export const Root = ()  => {
    return (
        <div style={{ height: '100%', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: '100%'}} id="sidebar">
          <h1>React Navigation</h1>
          <div>
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
          </div>
          <nav>
            <div style={{display: "flex", justifyContent: "center", margin: "10px 10px", gap: 20}}>
                <NavLink to="/exercise1">
                    <button>
                        Exercice 1
                    </button>
                </NavLink>
                <NavLink to="/exercise2">
                    <button>
                        Exercice 2
                    </button>
                </NavLink>
                <NavLink to="/exercise3">
                    <button>
                        Exercice 3
                    </button>
                </NavLink>
            </div>

          </nav>
        <div id="detail"></div>
        </div>
    );
  }