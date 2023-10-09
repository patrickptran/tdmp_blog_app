export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*SuxLOmVaGixNpc7yQjQItQ.jpeg"
          alt=""
        />
      </div>
      <div className="text">
        <h2>My Preparation Journey for Google Interviews</h2>
        <p className="info">
          <a href="" className="author">
            Patrick
          </a>
          <time>Dec 24, 2020</time>
        </p>
        <p className="summary">
          Every Software Engineer aspires to create an impact with his/her
          technical prowess. The Tech giants of this world are an amazing
          workplace for techies to deliver experiences reaching billions of
          users.
        </p>
      </div>
    </div>
  );
}
