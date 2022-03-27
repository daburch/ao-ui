import { gql } from '@apollo/client';

export const GET_MATCH_SUMMARY = gql`
    fragment crystalMatchPlayersConnectionFragment on CrystalMatchPlayersConnection {
        edges {
            node {
                displayName
            }
        }
    }
  
    query getMatches {
        crystalMatches {
            matchId
            time
            team1Tickets
            team2Tickets
            team1Captain: playersConnection(where: {
                edge: {
                    team: 1
                }
            }, first: 1) {
                ...crystalMatchPlayersConnectionFragment
            }
            team2Captain: playersConnection(where: {
                edge: {
                    team: 2
                }
            }, first: 1) {
                ...crystalMatchPlayersConnectionFragment
            }
        }
    }
`;