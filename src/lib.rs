#![allow(unused)]

pub struct Config {
    dim: (u32, u32),
}

pub struct StepInput {
    iostate: IoState,
    last_result: Option<StepResult>,
}

pub struct IoState {
    keydown: Vec<Key>,
    keyup: Vec<Key>,
}

#[repr(u8)]
pub enum Key {
    Up,
    Down,
    Left,
    Right,
    Start,
    Select,
    A,
    B,
    C,
    D,
    LeftTrigger,
    RightTrigger,
}

pub struct StepResult {
    background: Background,
    layers: Vec<Layer>,
    sprites: Vec<Sprite>,
}

pub struct Background {
    palette: Palette,
    color: Color,
}

pub struct Layer {
    /// The dimensions of the backing buffer
    dim: (u32, u32),
    buf: Vec<(char, Color)>,
    pos: (u32, u32),
    off: (u8, u8),
    palette: Palette,
}

pub struct Sprite {
    dim: (u32, u32),
    pos: (u32, u32),
    off: (u8, u8),
    palette: Palette,
    color: Color,
}

#[repr(u8)]
pub enum Palette {
    BWCM,
}

#[repr(u8)]
pub enum Color {
    Zero,
    One,
    Two,
    Three,
}

pub trait Game {
    fn init(config: Config);
    fn step(&mut self, input: StepInput) -> StepResult;
    fn shutdown(last_result: StepResult);
}
