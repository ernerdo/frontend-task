import { useQuery } from '@tanstack/react-query'
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { DefaultLayout } from '../../layout'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const ChartMap = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'COVID-19 ChartMap',
      },
    },
  }
  const { status, data, error, isFetching } = useQuery(['chartMap'], () =>
    fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all').then(
      (res) => res.json()
    )
  )
  const chartData = {
    labels: Object.keys(data?.cases || []),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(data?.cases || []),
        borderColor: 'yellow',
        BackgroundColor: 'yellow',
      },
      {
        label: 'Deaths',
        data: Object.values(data?.deaths || []),
        borderColor: 'red',
        BackgroundColor: 'red',
      },
      {
        label: 'Recovered',
        data: Object.values(data?.recovered || []),
        borderColor: '#3cba9f',
        BackgroundColor: '#3cba9f',
      },
    ],
  }

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-4 w-full place-items-center">
        {status === 'success' && (
          <div className="w-4/5">
            <Line options={options} data={chartData} />
          </div>
        )}
        {isFetching && <div>Loading...</div>}
        {status === 'error' && <div>A error has been ocurred</div>}
      </div>
    </DefaultLayout>
  )
}
