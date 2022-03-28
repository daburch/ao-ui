import React from 'react';
import { useQuery } from '@apollo/client';
import MatchList from '../components/MatchList';

import { GET_MATCH_SUMMARY } from '../gql/summary';

const MatchSummary = () => {
    const { data, loading, error } = useQuery(GET_MATCH_SUMMARY);

    if (loading) return <p>loading</p>;
    if (error) return <p>ERROR: {error.message}</p>;
    if (!data) return <p>Not found</p>;

    return (
        <MatchList data={data} />
    );
};

export default MatchSummary;