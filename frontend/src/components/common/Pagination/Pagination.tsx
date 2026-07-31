import { ChevronLeft, ChevronRight } from "lucide-react";
import './Pagination.scss'

type Props = {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const Pagination = ({
    page,
    totalPages,
    onPageChange
}: Props) => {
    return (
        <div className="pagination">

            <button
                className="pagination-btn"
                disabled={page === 1}
                onClick={() => onPageChange(page - 1)}
            >
                <ChevronLeft size={18} />
                Previous
            </button>

            <div className="pagination-info">
                <span>{page}</span>
                <p>of {totalPages}</p>
            </div>

            <button
                className="pagination-btn"
                disabled={page === totalPages}
                onClick={() => onPageChange(page + 1)}
            >
                Next
                <ChevronRight size={18} />
            </button>

        </div>
    );
};

export default Pagination;