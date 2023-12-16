import Features from '../../components/Feature/Feature'
import Chart from './../../components/Chart/Chart'
import { xAxisData } from '../../datas';
import './Home.css'
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import WidgetLg from '../../components/WidgetLg/WidgetLg';

function Home() {
  return (
    <>
    <div className="home">
      <Features />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
    </>
  )
}

export default Home
