import { gql } from '@apollo/client';

export const GET_MATCH_DETAILS = gql`
    query Query($where: CrystalMatchWhere) {
        crystalMatches(where: $where) {
            matchId
            level
            team1Tickets
            team2Tickets
            time
            winner
            playersConnection {
                edges {
                    node {
                        displayName
                    }
                    healing
                    deaths
                    kills
                    team
                }
            }
        }
    }
`;