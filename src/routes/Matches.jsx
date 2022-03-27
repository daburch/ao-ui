import { useParams } from "react-router-dom";
import MatchDetails from "../pages/MatchDetails";
import MatchSummary from "../pages/MatchSummary";

export default function Matches() {
    let params = useParams();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'grey' }}>
            { params.matchId ? <MatchDetails matchId={ params.matchId } /> : <MatchSummary /> }
        </div>
    );
}