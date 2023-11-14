import BottomMain from './BottomMain/BottomMain'
import CenterMain from './CenterMain/CenterMain'
import TopMain from './TopMain/TopMain'

const MainComponent = () => {
    return (
        <div>
            <TopMain />
            <br />
            <CenterMain />
            <br />
            <BottomMain />
        </div>
    )
}

export default MainComponent