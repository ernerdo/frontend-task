import { useQuery } from '@tanstack/react-query'
import { DefaultLayout } from '../../layout'

export const ChartMap = () => {
  const { status, data, error, isFetching } = useQuery(['chartMap'], () =>
    fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all').then(
      (res) => res.json()
    )
  )
  console.log(status, data, error, isFetching)

  return (
    <DefaultLayout>
      <div>
        <h1>ChartMap</h1>
      </div>
    </DefaultLayout>
  )
}
