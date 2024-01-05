"use client";

import { useFormState } from "react-dom";

import { generateDescriptionAction } from "@/actions/generate-description-action";
import { saveDescriptionAction } from "@/actions/save-description-action";

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React from "react";

const initialState= {
  message: null,
  data: null,
  error: null,
  videoId: null,
};

export default function Home() {

  const [generateState, generateDescription] = useFormState(
    generateDescriptionAction,
    initialState
  );

  const [updateState, saveDescription] = useFormState(
    saveDescriptionAction,
    initialState
  );

  return (
    <div className="mb-8" key={updateState?.data}>
      <GenerateDescriptionForm formAction={generateDescription} state={generateState} />
      <SaveDescriptionForm formAction={saveDescription} state={generateState} /> 
    </div>
  );
}

function GenerateDescriptionForm({
  formAction,
  state,
}: {
  readonly formAction: any;
  readonly state: any;
}) {
  return (
    <form
      action={formAction}
      className="flex gap-2 items-center justify-center my-4"
    >
      <Input
        name="videoId"
        placeholder="Youtube Video ID or URL"
        className="w-full" 
        defaultValue={state.videId || ""}
        required
      />
      <Button type="submit">{"Generate Description"}</Button>
    </form>
  );
}

function SaveDescriptionForm({
  formAction,
  state,
}: {
  readonly formAction: any;
  readonly state: any;
}) {
  
  if (state.data === null) return null;

  return (
    <form action={formAction} className="w-full">
      <Textarea
        name="description"
        defaultValue={state.data}
        className="w-full h-[400px]"
      />
      <input type="hidden" name="videoId" value={state.videoId} />
      <Button className="float-right my-2" type="submit">Save Description</Button>
    </form>
  );
}