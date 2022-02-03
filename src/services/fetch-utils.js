import React from 'react';
import { checkError, client } from './client';

export async function getPhones() {
  const response = await client.from('phone').select();
  return checkError(response);
}

export async function getPizzas() {
  const response = await client.from('pizza').select();
  return checkError(response);
}

export async function getSpeakers() {
  const response = await client.from('speaker').select();
  return checkError(response);
}

export async function getComputers() {
  const response = await client.from('computer').select();
  return checkError(response);
}