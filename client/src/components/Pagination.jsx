import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useAppContext } from "../context/appContext";
const Pagination = () => {
  const { changePage, pageNumber } = useAppContext();
  let pages = Array.from(["1", "2", "3", " 4", "5"], (_, index) => {
    return index + 1;
  });
  const prevPage = () => {
    let newPage = pageNumber - 1;
    if (newPage < 1) {
      newPage = pages.length;
    }
    changePage(newPage);
  };

  const nextPage = () => {
    let newPage = pageNumber + 1;
    if (newPage > pages.length) {
      newPage = 1;
    }
    changePage(newPage);
  };
  return (
    <Wrapper>
      <div className="pagination ">
        <button className="btn prev" onClick={prevPage}>
          <IoIosArrowBack />
          Prev
        </button>
        <div className="btn_list">
          {pages.map((e, index) => (
            <button
              key={index}
              className={e === pageNumber ? "btn active" : "btn"}
              onClick={() => changePage(e)}
            >
              {e}
            </button>
          ))}
        </div>
        <button className="btn next" onClick={nextPage}>
          Next
          <IoIosArrowForward />
        </button>
      </div>
    </Wrapper>
  );
};

export default Pagination;
const Wrapper = styled.section`
  .btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pagination {
    display: flex;
    justify-content: space-between;
  }
  .active {
    background-color: transparent;
    color: var(--textColor);
    border: 2px solid var(--primary-500);
  }
  .btn_list {
    display: flex;
    justify-content: space-between;
    .btn {
      margin: 0 3px;
    }
  }
`;
