import React, { Component } from 'react';
import styled from 'styled-components';

const PlayerContainer = styled.div`
    display: flex;
    border: 1px solid black;
    border-radius: 5px;
    text-align: center;
    justify-content: space-between;
`;

const PlayerName = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    padding-right: 10px;
`;

const PlayerStats = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
`;

const Stat = styled.div`
    display: flex;
    flex-direction: row;
    width: 33%;
    justify-content: center;
`;

class Player extends Component {
    render() {
      return (
        <PlayerContainer>
            <PlayerName>
                { this.props.name }
            </PlayerName>
            <PlayerStats>
                <Stat>
                    { this.props.kills }
                </Stat>
                <Stat>
                    { this.props.deaths }
                </Stat>
                <Stat>
                    { this.props.healing }
                </Stat>
            </PlayerStats>
        </PlayerContainer>
      );
    }
  }

export default Player