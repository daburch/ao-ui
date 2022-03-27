import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import Player from '../components/Player'
import { GET_MATCH_DETAILS } from '../gql/details';

const MatchResultsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
`;

const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

const Score = styled.div`
    text-align: center;
    font-size: 64px;
`;

const TeamHeader = styled.div`
    background-color: #3399ff;
`;

const TeamMember = styled.div`
    background-color: #66b3ff;
`;

const MatchDetails = ({ matchId }) => {
    const { data, loading, error } = useQuery(GET_MATCH_DETAILS, {
        variables: {   
            "where": {
                "matchId": matchId
            }
        }
    });

  if (loading) return <p>loading</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  console.log(matchId)

  return (
    <MatchResultsContainer>
        <TeamContainer>
            <Score>{ data?.crystalMatches[0]?.team1Tickets }</Score>
            <TeamHeader>
                <Player
                    name="Team1"
                    kills="K"
                    deaths="D"
                    healing="H"
                />
            </TeamHeader>
            { 
                data?.crystalMatches[0]?.playersConnection?.edges
                    .filter((edge) => edge.team === 1)
                    .map((edge) =>
                        <TeamMember>
                            <Player 
                                name={ edge.node.displayName } 
                                kills={ edge.kills } 
                                deaths={ edge.deaths } 
                                healing={ edge.healing }
                            /> 
                        </TeamMember>
                    ) 
            }
        </TeamContainer>
        <TeamContainer>
            <Score>{ data?.crystalMatches[0]?.team2Tickets }</Score>
            <TeamHeader>
                <Player
                    name="Team2"
                    kills="K"
                    deaths="D"
                    healing="H"
                />
            </TeamHeader>
            { 
                data?.crystalMatches[0].playersConnection.edges
                    .filter((edge) => edge.team === 2)
                    .map((edge) =>
                        <TeamMember>
                            <Player
                                name={ edge.node.displayName } 
                                kills={ edge.kills } 
                                deaths={ edge.deaths } 
                                healing={ edge.healing }
                            /> 
                        </TeamMember>
                    )
            }
        </TeamContainer>
    </MatchResultsContainer>
  );
};

export default MatchDetails;