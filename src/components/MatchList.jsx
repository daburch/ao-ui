import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MatchList extends Component {
    render() {
        let matches = this.props.data && this.props.data?.crystalMatches && [...this.props.data?.crystalMatches]

      return (
        <div style={{ fontSize: '18px', maxHeight: '90%', overflow: 'auto', minWidth: '40%' }}>
            { matches
                .sort(function(x, y) {
                    if (x.time > y.time) {
                        return -1;
                    }
                    if (x.time < y.time) {
                        return 1;
                    }
                    return 0;
                })
                .map((m) =>
                    <Link style={{ color: 'black', border: '1px solid black', borderRadius: '5px', background: '#3399ff', display: 'flex', height: '50px', alignItems: 'center' }} to={`/matches/${m.matchId}`} key={ m.matchId }>
                        <div style={{ paddingLeft: '5px'}}>
                            { `${m.time}` }
                        </div>
                        <div style={{ textAlign: 'center', flexGrow: 1 }}>
                            { `[ ${ m.team1Tickets } ] ${ m.team1Captain?.edges[0].node.displayName } - ${ m.team2Captain.edges[0].node.displayName } [ ${ m.team2Tickets } ]` }
                        </div>
                    </Link>
                )
            }
        </div>
      );
    }
  }

export default MatchList