import { useEffect } from "react";

export function useDocumentTitle(title = "Welcome to the home page!") {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

/* ✅ create a new function called useDocumentTitle */
/* 👀 export function useDocumentTitle() {} */

export default function Home() {
  
  useDocumentTitle("Welcome to the home page!") //for some reason passing title here was insufficant
  /* 
    ✅ move the useEffect code into your useDocumentTitle function
   then, call the useDocumentTitle hook in your component
  */
  

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        To see the title change in the browser tab, click the 'Open in new tab'
        link above
      </p>
    </div>
  );
}
