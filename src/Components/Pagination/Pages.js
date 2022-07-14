import { useMemo } from "react";

export const Pages = ({ totalLength, toShow, getPageNumber }) => {
  const mynum = useMemo(() => CreatePages(totalLength, toShow), [totalLength]);

  function CreatePages(pages, show) {
    const numbers = [];
    for (let i = 1; i <= Math.ceil(pages / show); i++) {
      numbers.push(i);
    }
    return numbers;
  }

  const handlePage = (page) => {
    getPageNumber(page);
  };

  return (
    <div className="col-md-5 m-auto">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {mynum.map((e, index) => (
            <li key={index} className="page-item" onClick={() => handlePage(e)}>
              <a className="page-link" href="#">
                {e}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
