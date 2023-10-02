"use client";
import React from "react";
import { FC} from "react";
interface Props {
    id?: any;
  }
const Detail: FC<Props> = (id: any) => {
   console.log(id.id.params.id)
return (
    <div>
        {id.id.params.id}
    </div>
)
  
}

export default Detail