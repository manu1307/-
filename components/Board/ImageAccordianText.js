export default function ImageAccordianText({ title }) {
  return (
    <div className="wrap">
      <h3 className="">{title}</h3>
      <style jsx>
        {`
          .wrap {
            background: white;
            margin: 0 auto;
            display: -webkit-box;
            word-wrap: break-word;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 30%;
          }
          h3 {
            color: black;
            margin: 10px 10%;
            height: 50px;
          }
        `}
      </style>
    </div>
  );
}
