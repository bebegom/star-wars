import {React} from 'react'
import {Button} from 'react-bootstrap'

const PaginationBar = ({data, page, pageChange}) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <Button disabled={!data.previous || page <= 1} onClick={() => pageChange(prevValue => prevValue - 1)} variant='primary'>Previous page</Button>
                <p>page {page}</p>
                <Button disabled={!data.next || page >= 9} onClick={() => pageChange(prevValue => prevValue + 1)}  variant='primary'>Next page</Button>
    </div>
  )
}

export default PaginationBar
